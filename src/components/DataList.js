import React, { useState, useEffect } from "react";
// import styled, { createGlobalStyle } from "styled-components";
// import { Table, DatePicker } from "antd";
import { List } from "antd";
import "antd/dist/antd.css";

const DataList = (props) => {
  const { onDelete, data } = props;
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    const tempList = [];
    for (let i = 0; i < data.length; i++) {
      tempList.push({
        content: data[i],
        key: i,
      });
    }
    console.log(1);
    setFileList(tempList);
  }, [data]);

  return (
    <List
      size="small"
      header={<div>파일 목록</div>}
      bordered
      dataSource={fileList}
      renderItem={(item) => (
        <List.Item
          key={item.key}
          actions={[
            <p
              onClick={() => {
                onDelete(item.key);
                //console.log(item.key);
              }}
            >
              delete
            </p>,
          ]}
        >
          {item.content}
        </List.Item>
      )}
    />
  );
};
export default DataList;
