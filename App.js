/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ListView } from 'react-native';
import FAB from 'react-native-fab';
import { Container, Header, Left, Body, Right, Title, Content, List, ListItem, Button, Text, Icon, View, Card, CardItem, Item, Input } from 'native-base';
const datas = [
  'さば2p 198円',
  '人参1本 38円',
  'さば2p 198円',
  '人参1本 38円',
];
export default class SwipeableListExample extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
    basic: true,
    listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>特売価格</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text style={{ paddingLeft: 20 }}>{data}</Text>
              </ListItem>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
          <Card style={{ marginTop: 100 }}>
            <CardItem>
              <Body>
                <Item>
                  <Input placeholder="Item-Name　Price"/>
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Button rounded danger onPress={() => alert("This is Card Header")} style={{ marginLeft: 250, marginTop: 5 }}>
            <Text> + 特価メモ </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}