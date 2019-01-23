import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import treeData from './TreeData'
export default class Tree extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      treeData: [{ title: 'Chicken', suman:'KalluBhai', children: [{ title: 'Egg' }] }],
    };
  }
 
  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={treeData}
          onChange={(treeData) => this.setState({ treeData })}
        />
      </div>
    );
  }
}