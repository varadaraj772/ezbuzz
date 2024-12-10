import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Platform,
  Button,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import EasebuzzCheckout from 'react-native-easebuzz-kit';

const App = () => {
  const callPaymentGateway = async () => {
    const url = 'https://testpay.easebuzz.in/payment/initiateLink';
    const body = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: new URLSearchParams({
        key: '',
        txnid: '',
        amount: '^[0-9.]*$',
        productinfo: '',
        firstname: '',
        phone: '^(+d{1,4}[-]?)?d{5,20}$',
        email: '',
        surl: '',
        furl: '',
        hash: '',
        udf1: '',
        udf2: '',
        udf3: '',
        udf4: '',
        udf5: '',
        udf6: '',
        udf7: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        show_payment_mode: '',
        split_payments: '',
        request_flow: '',
        sub_merchant_id: '',
        payment_category: '',
        account_no: '',
        ifsc: '',
      }),
    };

    try {
      const response = await fetch(url, body);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }


    // var options = {
    //   access_key: '',
    //   pay_mode: 'test',
    // };
    // EasebuzzCheckout.open(options)
    //   .then(data => {
    //     //handle the payment success & failed response here
    //     console.log('Payment Response:');
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     //handle sdk failure issue here
    //     console.log('SDK Error:');
    //     console.log(error);
    //   });
  };
  return (
    <View style={styles.container}>
      <Button title="Call Payment Gateway" onPress={callPaymentGateway} />
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
