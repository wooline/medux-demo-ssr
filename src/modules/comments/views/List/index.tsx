/* eslint-disable react/no-find-dom-node */
import './index.less';

import {DispatchProp, connect} from 'react-redux';
import {ListItem, ListSummary} from 'entity/comment';
import {ViewNames, historyActions} from 'common/route';

import {ModuleNames} from 'modules/names';
import {Pagination} from 'antd-mobile';
import React from 'react';
import {RootState} from 'modules';
import {RouteData} from '@medux/react-web-router/types/export';
import {RouteParams} from '../../meta';
import {findDOMNode} from 'react-dom';

interface StateProps {
  routeData: RouteData;
  listSearch: RouteParams['listSearch'];
  listItems: ListItem[] | undefined;
  listSummary: ListSummary | undefined;
}
let scrollTop = NaN;
class Component extends React.PureComponent<StateProps & DispatchProp> {
  private onPageChange = (page: number) => {
    historyActions.push({extend: this.props.routeData, params: {comments: {listSearch: {page}}}});
  };
  private onSortChange = (isNewest: boolean) => {
    historyActions.push({extend: this.props.routeData, params: {comments: {listSearch: {page: 1, isNewest}}}});
  };
  private onItemClick = (itemId: string) => {
    // 记住当前滚动位置
    const dom = findDOMNode(this) as HTMLElement;
    scrollTop = (dom.parentNode as HTMLDivElement).scrollTop;
    const {routeData} = this.props;
    const paths = routeData.paths.slice(0, -1).concat(ViewNames.commentsDetails);
    historyActions.push({extend: routeData, paths, params: {comments: {itemId}}});
  };

  public render() {
    const {listSearch, listItems, listSummary} = this.props;
    if (listItems) {
      return (
        <div className={`${ModuleNames.comments}-List`}>
          <div className="list-header">
            <div onClick={() => this.onSortChange(false)} className={listSearch.isNewest ? '' : 'on'}>
              最热
            </div>
            <div onClick={() => this.onSortChange(true)} className={listSearch.isNewest ? 'on' : ''}>
              最新
            </div>
          </div>
          <div className="list-items">
            {listItems.map(item => (
              <div onClick={() => this.onItemClick(item.id)} className="g-border-top" key={item.id}>
                <div className="avatar" style={{backgroundImage: `url(${item.avatarUrl})`}} />
                <div className="user">
                  {item.username}
                  <span className="date">{item.createdTime}</span>
                </div>
                <div className="content">{item.content}</div>
                <span className="reply">
                  <span className="act">回复</span>({item.replies})
                </span>
              </div>
            ))}
          </div>
          {listSummary && (
            <div className="g-pagination">
              <Pagination current={listSummary.page} total={listSummary.totalPages} onChange={this.onPageChange} />
            </div>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
  public componentDidUpdate() {
    this.scroll();
  }
  public componentDidMount() {
    this.scroll();
  }
  private scroll() {
    // 恢复记住的滚动位置
    const dom = findDOMNode(this) as HTMLElement;
    if (dom) {
      (dom.parentNode as HTMLDivElement).scrollTop = scrollTop;
      scrollTop = 0;
    }
  }
}

const mapStateToProps: (state: RootState) => StateProps = state => {
  const model = state.comments!;
  return {
    routeData: state.route.data,
    listSearch: model.routeParams!.listSearch,
    listItems: model.listItems,
    listSummary: model.listSummary,
  };
};

export default connect(mapStateToProps)(Component);
