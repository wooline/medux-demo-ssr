let {term = '', sorterField = '', sorterOrder = '', roleName = '', pageCurrent, pageSize, purviews} = request.query;

term = term.toString();
sorterField = sorterField.toString();
sorterOrder = sorterOrder.toString();
roleName = roleName.toString();
purviews = Array.isArray(purviews) ? purviews : [];
pageCurrent = parseInt(pageCurrent) || 1;
pageSize = parseInt(pageSize) || 10;

const start = (pageCurrent - 1) * pageSize;
const end = start + pageSize;

const result = {
  statusCode: 422,
  headers: {
    'x-delay': 0,
    'content-type': 'application/json; charset=utf-8',
  },
};
const rolesData = database.data.roles;
let resourceList = Object.keys(rolesData).map(id => {
  return rolesData[id];
});

if (typeof request.query.term === 'string') {
  if (term) {
    resourceList = resourceList.filter(item => item.roleName.includes(term));
  }
} else {
  if (purviews.some(purview => !database.data.config.purviews[purview])) {
    result.response = {
      message: '权限搜索条件不合法！',
    };
    return result;
  }

  if (roleName) {
    resourceList = resourceList.filter(item => item.roleName.includes(roleName));
  }
  if (purviews.length > 0) {
    resourceList = resourceList.filter(item => {
      const str = item.purviews.join(',');
      return purviews.some(purview => str.includes(purview));
    });
  }
  if (sorterField === 'createdTime') {
    if (sorterOrder === 'ascend') {
      resourceList.sort((a, b) => {
        return a.createdTime - b.createdTime;
      });
    } else if (sorterOrder === 'descend') {
      resourceList.sort((a, b) => {
        return b.createdTime - a.createdTime;
      });
    }
  }
}

const totalItems = resourceList.length;

result.statusCode = 200;
result.response = {
  listSummary: {
    pageCurrent,
    pageSize,
    totalItems,
    totalPages: Math.ceil(resourceList.length / pageSize),
  },
  list: resourceList.slice(start, end),
};

return result;
