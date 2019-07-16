/* eslint-disable react/no-find-dom-node */
import './index.less';

import {DispatchProp, connect} from 'react-redux';

import {ItemDetail} from 'entity/comment';
import {Icon as MIcon} from 'antd-mobile';
import {ModuleNames} from 'modules/names';
import React from 'react';
import {RootState} from 'modules';
import {findDOMNode} from 'react-dom';
import {historyActions} from 'common/route';

interface StateProps {
  itemDetail: ItemDetail | undefined;
}

class Component extends React.PureComponent<StateProps & DispatchProp> {
  private onBack = () => {
    historyActions.goBack();
  };

  public render() {
    const {itemDetail} = this.props;
    if (itemDetail) {
      return (
        <div className={`${ModuleNames.comments}-Details g-modal g-enter-in`}>
          <div className="list-header">
            <div onClick={this.onBack} className="close-button">
              <MIcon size="md" type="left" />
              <span>返回</span>
            </div>
          </div>
          <div className="list-items">
            <div className="g-border-top">
              <div className="avatar" style={{backgroundImage: `url(${itemDetail.avatarUrl})`}} />
              <div className="user">
                {itemDetail.username}
                <span className="date">{itemDetail.createdTime}</span>
              </div>
              <div className="content">{itemDetail.content}</div>
              <span className="reply">
                <span className="act">回复</span>({itemDetail.replies})
              </span>
            </div>
            {itemDetail.repliesList.map((item, index) => (
              <div className={index !== 0 ? 'g-border-top' : ''} key={item.id}>
                <div className="avatar" style={{backgroundImage: `url(${item.avatarUrl})`}} />
                <div className="user">
                  {item.username}
                  <span className="date">{item.createdTime}</span>
                </div>
                <div className="content">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  private fadeIn() {
    const dom = findDOMNode(this) as HTMLElement;
    if (dom && dom.className.indexOf('g-enter-in') > -1) {
      setTimeout(() => {
        dom.className = dom.className.replace('g-enter-in', '');
      }, 0);
    }
  }
  public componentDidUpdate() {
    this.fadeIn();
  }
  public componentDidMount() {
    this.fadeIn();
    const dom = findDOMNode(this) as HTMLElement;
    if (dom) {
      (dom.parentNode as HTMLDivElement).scrollTop = 0;
    }
  }
}

const mapStateToProps: (state: RootState) => StateProps = state => {
  return {
    itemDetail: state.comments!.itemDetail,
  };
};

export default connect(mapStateToProps)(Component);
