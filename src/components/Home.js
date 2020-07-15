import React, {useState, Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image,
	Dimensions,
	ImageBackground,
	FlatList,
	TouchableOpacity,
	RefreshControl
} from 'react-native';
import {connect, Provider} from "react-redux";
import {bindActionCreators} from "redux";
import {Col, Row, Grid} from "react-native-easy-grid";
import {SwipeListView, SwipeRow} from "react-native-swipe-list-view";

import Cell from './Cell';
import { fetchQuotes } from '../actions';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
      ok: true,
      refreshing: false,
			listStock: "VND,EIB,GAS,VIC"
    }
    this.renderHeader = this.renderHeader.bind(this)
    this.renderItem = this. renderItem.bind(this)
	}

  componentDidMount(){
    this.props.fetchQuotes(this.state.listStock)
  }
  
  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.fetchQuotes(this.state.listStock);
    this.setState({ refreshing: false });
  }
  
	render() {
    return (
      <View style={styles.container}>
        
        <Grid>
          <Row style={{height:60}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 24,
                marginLeft: 10,
                paddingTop: 20
              }}>Danh Mục
              
            </Text>
          </Row>
          <Row>
            <Col>
              <SwipeListView
                refreshControl={
                  <RefreshControl
                    title={"Refresh?"}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                  />
                }
                useFlatList={true}
                style={styles.listview}
                data={this.props.quotes}
                ListHeaderComponent={this.renderHeader}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                
              />
            </Col>
          </Row>    
        </Grid>
      </View>
    )
            
  }

  renderHeader() {
    return (
      <Grid>
        <Row style={styles.row}>
          <Col style={styles.col}>
            <Text
                style={{
                    color: '#828395'
                }}>Sym</Text>
          </Col>
          <Col style={styles.col}>
            <Text
                style={{
                    color: '#828395'
                }}>LastPrice</Text>
          </Col>
          <Col style={styles.col}>
            <Text
                style={{
                    color: '#828395'
                }}>Change</Text>
          </Col>
          <Col style={styles.col}>
            <Text
                style={{
                    color: '#828395'
                }}>Lot</Text>
          </Col>
        </Row>
        
      </Grid>
    )
  }

  renderItem({item, index}) {
    return (
      <TouchableHighlight
        // onPress={() => {
        //   console.log('touched');
        //   store.dispatch({
        //     type:"QUOTE_DETAIL",
        //     result: {Sym: item.sym}
        //   })
        //   Actions.quote_detail();
        // }}
        style={{
          borderRadius: 5,
          marginBottom: 3,
          
        }}
        underlayColor={'#fff'}>
        <View>
          <Grid>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Cell data={item} type="sym" />
              </Col>
              <Col style={styles.cow}>
                <Cell data={item} type="lastPrice" />
              </Col>
              <Col style={styles.cow}>
                <Cell data={item} type="change" />
              </Col>
              <Col style={styles.cow}>
                <Cell data={item} type="lot" />
              </Col>
            </Row>
          </Grid>
        </View>
      </TouchableHighlight>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    quotes: state.quoteReducer.quotes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchQuotes: (pList) => {
      dispatch(fetchQuotes(pList))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ' #43488a'
  },
  listview: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  row: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#828395',
    height: 50,
    justifyContent: 'space-between',
    alignContent:'space-between',
    alignItems: 'center',
    //backgroundColor: '#828395'
  },
  col: {
    //width:50,
    paddingLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  rowcell: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  menubutton: {
    width: 30,
    height: 30
}
})