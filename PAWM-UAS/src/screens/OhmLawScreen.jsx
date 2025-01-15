import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title, Paragraph } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const OhmLawScreen = () => {
  const [voltage, setVoltage] = useState('');
  const [resistance, setResistance] = useState('');
  const [current, setCurrent] = useState(null);

  const calculateCurrent = () => {
    const v = parseFloat(voltage);
    const r = parseFloat(resistance);
    if (v && r) {
      setCurrent((v / r).toFixed(2));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Title>Rangkaian DC - Hukum Ohm</Title>
      <Paragraph>
        Hukum Ohm menyatakan bahwa arus listrik yang mengalir melalui penghantar
        antara dua titik sebanding dengan voltase di antara kedua titik tersebut.
      </Paragraph>
      <TextInput
        label="Voltase (V)"
        value={voltage}
        onChangeText={setVoltage}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Hambatan (Ω)"
        value={resistance}
        onChangeText={setResistance}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={calculateCurrent} style={styles.button}>
        Hitung Arus
      </Button>
      {current && (
        <View style={styles.result}>
          <Paragraph>Arus Listrik (I): {current} A</Paragraph>
        </View>
      )}
      {current && (
        <LineChart
          data={{
            labels: ['0', '2', '4', '6', '8', '10'],
            datasets: [
              {
                data: [0, 2, 4, 6, 8, 10].map(v => v / parseFloat(resistance)),
              },
            ],
          }}
          width={300}
          height={200}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default OhmLawScreen;

