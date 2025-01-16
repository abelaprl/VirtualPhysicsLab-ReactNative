import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Title, Card } from 'react-native-paper';
import { getAuth, signOut } from 'firebase/auth';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      navigation.replace('Auth');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Simulasi Fisika Dasar Virtual</Title>
      <View style={styles.topicsContainer}>
        <Card style={styles.topicCard} onPress={() => navigation.navigate('OhmLaw')}>
          <Card.Title title="Rangkaian DC - Hukum Ohm" />
        </Card>
        {/* Tambahkan card untuk topik lainnya di sini */}
      </View>
      <Button mode="contained" onPress={handleLogout} style={styles.logoutButton}>
        Logout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  topicCard: {
    width: '48%',
    marginBottom: 10,
  },
  logoutButton: {
    marginTop: 20,
  },
});

export default HomeScreen;

