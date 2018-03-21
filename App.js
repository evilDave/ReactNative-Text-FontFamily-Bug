import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 28, fontFamily: 'Roboto' }}>aaa Roboto</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Bold' }}>aaa Montserrat-Bold</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Regular' }}>aaa Montserrat-Regular</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Thin' }}>aaa Montserrat-Thin</Text>
        <Text style={{ marginBottom: -12, marginTop: 12, fontSize: 10 }}>regular then thin</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Regular' }}>
          aaa parent <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Thin' }}>aaa child</Text>
        </Text>
        <Text style={{ marginBottom: -12, fontSize: 10 }}>bold then thin (renders roboto)</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Bold' }}>
          aaa parent <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Thin' }}>aaa child</Text>
        </Text>
        <Text style={{ marginBottom: -12, fontSize: 10 }}>thin then regular</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Thin' }}>
          aaa parent <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Regular' }}>aaa child</Text>
        </Text>
        <Text style={{ marginBottom: -12, fontSize: 10 }}>bold then bold (renders roboto!)</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Bold' }}>
          aaa parent <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Bold' }}>aaa child</Text>
        </Text>
        <Text style={{ marginBottom: -12, fontSize: 10 }}>bold then nothing (okay!)</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Montserrat-Bold' }}>
          aaa parent <Text style={{ fontSize: 28 }}>aaa child</Text>
        </Text>
        <Text style={{ marginBottom: -10, marginTop: 12, fontSize: 10 }}>with other custom font...</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Amaranth-Bold' }}>aaa Amaranth-Bold</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Amaranth-Regular' }}>aaa Amaranth-Regular</Text>
        <Text style={{ fontSize: 28, fontFamily: 'Amaranth-Bold' }}>
          aaa parent <Text style={{ fontSize: 28, fontFamily: 'Amaranth-Bold' }}>aaa child</Text>
        </Text>
      </View>
    );
  }
}
