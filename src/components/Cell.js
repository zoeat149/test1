import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
// import styles from "../styles/styles";
import * as Utils from "../Utils";

export default class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = { stylehl: "" };
  }
  componentDidMount() {
    /*
    this.setState({
      stylehl: styles.rowcellhl
    });
    
    setTimeout(() => {
      this.setState({
        stylehl: ""
      });
    }, 100);
    */
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.data !== this.props.data) {
      switch (this.props.type) {
        case "sym": {
          if (this.props.data.ot != prevProps.data.ot) {
            this.changeBackground();
          }
          break;
        }
        case "lastPrice": {
          if (this.props.data.lastPrice != prevProps.data.lastPrice) {
            this.changeBackground();
          }

          break;
        }
        case "lastVolume": {
          if (this.props.data.lastVolume != prevProps.data.lastVolume) {
            this.changeBackground();
          }
          break;
        }
        case "lot": {
          if (this.props.data.lot != prevProps.data.lot) {
            this.changeBackground();
          }
          break;
        }
        case "topb1": {
          if (this.props.data.g1 != prevProps.data.g1) {
            this.changeBackground();
          }
          break;
        }
        case "topb2": {
          if (this.props.data.g2 != prevProps.data.g2) {
            this.changeBackground();
          }
          break;
        }
        case "topb3": {
          if (this.props.data.g3 != prevProps.data.g3) {
            this.changeBackground();
          }
          break;
        }
        case "tops1": {
          if (this.props.data.g4 != prevProps.data.g4) {
            this.changeBackground();
          }
          break;
        }
        case "tops2": {
          if (this.props.data.g5 != prevProps.data.g5) {
            this.changeBackground();
          }
          break;
        }
        case "tops3": {
          if (this.props.data.g6 != prevProps.data.g6) {
            this.changeBackground();
          }
          break;
        }
        default: {
          break;
        }
      }
    }
  }
  
  changeBackground() {
    setTimeout(() => {
      this.setState({
        stylehl: styles.rowcellhl
      });
    }, 0);

    setTimeout(() => {
      this.setState({
        stylehl: ""
      });
    }, 1000);
  }
  getStyle(pCeil, pFloor, pRef, pPrice) {
    if (pPrice == pCeil) return styles.c;
    if (pPrice == pFloor) return styles.f;
    if (pPrice == pRef) return styles.e;
    if (pPrice == 0) return styles.e;
    if (pPrice < pCeil && pPrice > pRef) return styles.i;
    if (pPrice > pFloor && pPrice < pRef) return styles.d;
  }
  StringSplitColor(value) {
    if (typeof value != "undefined" && value != null) {
      var vValue = value + "";
      switch (vValue.split("|")[2]) {
        case "i":
          return styles.i;
        case "d":
          return styles.d;
        case "c":
          return styles.c;
        case "f":
          return styles.f;
        case "e":
          return styles.e;
        case "green":
          return styles.i;
        case "red":
          return styles.d;
        case "violet":
          return styles.c;
        case "white":
          return styles.f;
        case "yellow":
          return styles.e;
        default:
          return "";
      }
    } else {
      return "";
    }
  }

  render() {
    var vstyle = "";
    var vvalue = {};
    switch (this.props.type) {
      case "sym": {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <View style={styles.rowcell}>
            <Text style={styles.symbol, vstyle}>{this.props.data.sym}</Text>
          </View>
        );
        break;
      }
      
      case "change": {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <View style={[styles.rowcell, styles.align_r]}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {this.props.data.ot}
            </Text>
          </View>
        );
        break;
      }

      case "lastPrice": {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <View style={[styles.rowcell, styles.align_r]}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {this.props.data.lastPrice}
            </Text>
          </View>
        );
        break;
      }

      case "lastVolume": {
        
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <View style={[styles.rowcell, styles.align_r]}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.formatNumber(this.props.data.lastVolume)}
            </Text>
          </View>
        );
        break;
      }
      case "match": {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <Text style={[styles.value, vstyle, this.state.stylehl]}>
            {Utils.formatNumber(this.props.data.lastPrice)}
            &nbsp;&nbsp;
            {Utils.formatNumber(this.props.data.lastVolume)}
          </Text>
        );
        break;
      }
      case "lot": {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <View style={[styles.rowcell, styles.align_r]}>
            <Text style={[styles.value,vstyle,  this.state.stylehl]}>
              {Utils.formatNumber(this.props.data.lot)}
            </Text>
          </View>
        );
        break;
      }

      case "staticlot": {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <View
            style={{
              flexDirection: "column",
              flex: 2,
              alignItems: "flex-end"
            }}
          >
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.formatNumber(this.props.data.lot)}
            </Text>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.formatNumber(this.props.data.lot)}
            </Text>
          </View>
        );
        break;
      }
      case "staticchange": {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <View
            style={{
              flexDirection: "column",
              flex: 2,
              alignItems: "flex-end"
            }}
          >
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.formatNumber(this.props.data.ot)}
            </Text>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.formatNumber(this.props.data.changePc)}%
            </Text>
          </View>
        );
        break;
      }
      case "staticprice": {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <View style={[styles.rowcell, styles.align_r]}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {this.props.data.lastPrice}
            </Text>
          </View>
        );
        break;
      }
      case "topb1": {
        vstyle = this.StringSplitColor(this.props.data.g1);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitVol(this.props.data.g1)}
            </Text>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g1)}
            </Text>
          </View>
        );
        break;
      }
      case "topb2": {
        vstyle = this.StringSplitColor(this.props.data.g2);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitVol(this.props.data.g2)}
            </Text>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g2)}
            </Text>
          </View>
        );
        break;
      }
      case "topb3": {
        vstyle = this.StringSplitColor(this.props.data.g3);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitVol(this.props.data.g3)}
            </Text>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g3)}
            </Text>
          </View>
        );
        break;
      }
      case "tops1": {
        vstyle = this.StringSplitColor(this.props.data.g4);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g4)}
            </Text>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitVol(this.props.data.g4)}
            </Text>
          </View>
        );
        break;
      }
      case "tops2": {
        vstyle = this.StringSplitColor(this.props.data.g5);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g5)}
            </Text>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitVol(this.props.data.g5)}
            </Text>
          </View>
        );
        break;
      }
      case "tops3": {
        vstyle = this.StringSplitColor(this.props.data.g6);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g6)}
            </Text>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitVol(this.props.data.g6)}
            </Text>
          </View>
        );
        break;
      }
      case "priceb1": {
        vstyle = this.StringSplitColor(this.props.data.g1);
        vvalue = (
          <View style={styles.rowprice}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g1)}
            </Text>
          </View>
        );
        break;
      }
      case "priceb2": {
        vstyle = this.StringSplitColor(this.props.data.g2);
        vvalue = (
          <View style={styles.rowprice}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g2)}
            </Text>
          </View>
        );
        break;
      }
      case "priceb3": {
        vstyle = this.StringSplitColor(this.props.data.g3);
        vvalue = (
          <View style={styles.rowprice}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g3)}
            </Text>
          </View>
        );
        break;
      }
      case "prices1": {
        vstyle = this.StringSplitColor(this.props.data.g4);
        vvalue = (
          <View style={styles.rowprice}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g4)}
            </Text>
          </View>
        );
        break;
      }
      case "prices2": {
        vstyle = this.StringSplitColor(this.props.data.g5);
        vvalue = (
          <View style={styles.rowprice}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g5)}
            </Text>
          </View>
        );
        break;
      }
      case "prices3": {
        vstyle = this.StringSplitColor(this.props.data.g6);
        vvalue = (
          <View style={styles.rowprice}>
            <Text style={[styles.value, vstyle, this.state.stylehl]}>
              {Utils.StringSplitPrice(this.props.data.g6)}
            </Text>
          </View>
        );
        break;
      }
      case "volb1": {
        vstyle = this.StringSplitColor(this.props.data.g1);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text
              style={[styles.value, vstyle, this.state.stylehl, styles.text_c]}
            >
              {Utils.StringSplitVol(this.props.data.g1)}
            </Text>
          </View>
        );
        break;
      }
      case "volb2": {
        vstyle = this.StringSplitColor(this.props.data.g2);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text
              style={[styles.value, vstyle, this.state.stylehl, styles.text_c]}
            >
              {Utils.StringSplitVol(this.props.data.g2)}
            </Text>
          </View>
        );
        break;
      }
      case "volb3": {
        vstyle = this.StringSplitColor(this.props.data.g3);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text
              style={[styles.value, vstyle, this.state.stylehl, styles.text_c]}
            >
              {Utils.StringSplitVol(this.props.data.g3)}
            </Text>
          </View>
        );
        break;
      }
      case "vols1": {
        vstyle = this.StringSplitColor(this.props.data.g4);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text
              style={[styles.value, vstyle, this.state.stylehl, styles.text_c]}
            >
              {Utils.StringSplitVol(this.props.data.g4)}
            </Text>
          </View>
        );
        break;
      }
      case "vols2": {
        vstyle = this.StringSplitColor(this.props.data.g5);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text
              style={[styles.value, vstyle, this.state.stylehl, styles.text_c]}
            >
              {Utils.StringSplitVol(this.props.data.g5)}
            </Text>
          </View>
        );
        break;
      }
      case "vols3": {
        vstyle = this.StringSplitColor(this.props.data.g6);
        vvalue = (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text
              style={[styles.value, vstyle, this.state.stylehl, styles.text_c]}
            >
              {Utils.StringSplitVol(this.props.data.g6)}
            </Text>
          </View>
        );
        break;
      }
      default: {
        vstyle = this.getStyle(
          this.props.data.c,
          this.props.data.f,
          this.props.data.r,
          this.props.data.lastPrice
        );
        vvalue = (
          <Text style={[styles.value, this.state.stylehl]}>
            {this.props.data.lastPrice}
          </Text>
        );
        break;
      }
    }
    return vvalue;
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center"
  },
  align_l: {
    justifyContent: "flex-start"
  },
  align_r: {
    justifyContent: "flex-start"
  },
  align_c: {
    justifyContent: "center"
  },
  text_c: {
    textAlign: "center"
  },
  inputBox: {
    width: 300,
    fontSize: 12,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
  rowcellhl: {
    fontSize: 12,
    backgroundColor: "yellow",
    color: "black"
  },
  rowcell: {
    flex: 1,
    fontSize: 12,
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5
  },
  rowprice: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#43485B",
    justifyContent: "center"
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  symbol: {
    paddingTop: 5,
    fontSize: 14,
    color: "#ffffff",
    height: 30,
    paddingLeft: 5
  },
  value: {
    paddingTop: 8,
    fontSize: 12,
    color: "#ffffff",
    height: 30,
    paddingLeft: 5
  },
  c: {
    color: "#ff00ff"
  },
  f: {
    color: "#00ffff"
  },
  e: {
    color: "#ffff00"
  },
  i: {
    color: "#03ff04"
  },
  d: {
    color: "#ff5050"
  },
  q: {
    color: "#00ffff"
  },
});
