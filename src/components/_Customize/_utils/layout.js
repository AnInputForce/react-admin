/**
 * xs < 576px
 * sm ≥ 576px
 * md ≥ 768px
 * lg ≥ 992px
 * xl ≥ 1200px
 * xxl ≥ 1600px
 */
export function getFormItemLayout(columnLayout, columnIndex = 0, columnExpand = 1) {
  if (columnLayout === 1) {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };
    return formItemLayout;
  }
  if (columnLayout === 2) {
    const expand = columnExpand > 2 ? 2 : columnExpand;
    if (expand === 2) {
      const formItemLayout = {
        sm: 24,
        md: 24,
        lg: 24,
        xl: 22,
      };
      return formItemLayout;
    }
    const formItemLayout = {
      sm: 24,
      md: 12,
      lg: 12,
      xl: { span: 10, offset: columnIndex % 2 === 0 ? 0 : 2 },
    };
    return formItemLayout;
  }
  if (columnLayout === 3) {
    const expand = columnExpand > 3 ? 3 : columnExpand;
    if (expand === 3) {
      return {
        sm: 24,
        md: 24,
        lg: 24,
        xl: 22,
      };
    }
    if (expand === 2) {
      if (columnIndex === 0) {
        return {
          sm: 24,
          md: 16,
          lg: 16,
          xl: 14,
        };
      }
      return {
        sm: 24,
        md: 16,
        lg: 16,
        xl: { span: 14, offset: 2 },
      };
    }
    const formItemLayout = {
      sm: 24,
      md: 8,
      lg: 8,
      xl: { span: 6, offset: columnIndex % 3 === 0 ? 0 : 2 },
    };
    return formItemLayout;
  }
  return null;
}

export function getFormItemLayoutWithoutOffset(columnLayout) {
  if (columnLayout === 1) {
    return getFormItemLayout(columnLayout);
  }
  if (columnLayout === 2) {
    return { sm: 24, md: 12 };
  }
  if (columnLayout === 3) {
    return { sm: 24, md: 8 };
  }
  return null;
}

export function getFormButtonLayout(columnLayout) {
  if (columnLayout === 1) {
    const formButtonLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    return formButtonLayout;
  }
  const formButtonLayout = {
    lg: 24,
    xl: 22,
  };
  return formButtonLayout;
}

export function getDescButtonLayout(columnLayout) {
  if (columnLayout === 1) {
    const formButtonLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    return formButtonLayout;
  }
  const formButtonLayout = {
    wrapperCol: {
      sm: { span: 24, offset: 0 },
      md: { span: 16, offset: 8 },
    },
  };
  return formButtonLayout;
}
