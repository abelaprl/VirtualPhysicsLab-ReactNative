import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { TextInput, Button, Title, Paragraph } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const OhmLawScreen = () => {
  const [voltage, setVoltage] = useState('');
  const [resistance, setResistance] = useState('');
  const [current, setCurrent] = useState(null);
  const [chartData, setChartData] = useState(null);

  const navigation = useNavigation();

  const calculateCurrent = () => {
    const v = parseFloat(voltage);
    const r = parseFloat(resistance);
    if (v && r) {
      const i = v / r;
      setCurrent(i.toFixed(2));
      generateChartData(v, r);
    }
  };

  const generateChartData = (v, r) => {
    const voltages = [0, v * 0.2, v * 0.4, v * 0.6, v * 0.8, v];
    const currents = voltages.map(volt => (volt / r).toFixed(2));
    
    setChartData({
      labels: voltages.map(volt => volt.toFixed(1)),
      datasets: [
        {
          data: currents.map(Number),
        },
      ],
    });
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
      {chartData && (
        <View style={styles.chartContainer}>
          <Title style={styles.chartTitle}>Grafik V-I</Title>
          <LineChart
            data={chartData}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={styles.chart}
            yAxisLabel="I (A) "
            xAxisLabel=" V (V)"
            yAxisSuffix=""
          />
        </View>
      )}
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Quiz')} 
        style={styles.quizButton}
      >
        Latihan Soal
      </Button>
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
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  quizButton: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default OhmLawScreen;