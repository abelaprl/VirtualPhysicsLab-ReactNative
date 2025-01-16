import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Title, Card, Text, Paragraph, IconButton, Colors } from 'react-native-paper';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [showTip, setShowTip] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      navigation.replace('Auth');
    } catch (error) {
      console.error(error);
    }
  };

  const topics = [
    { title: "Rangkaian DC - Hukum Ohm", route: "OhmLaw", icon: "resistor" },
    { title: "Rangkaian DC - Hukum Kirchoff", locked: true, icon: "circuit-branch" },
    { title: "Gelombang Mekanik", locked: true, icon: "wave" },
    { title: "Gerak Osilasi", locked: true, icon: "sine-wave" },
    { title: "Termodinamika", locked: true, icon: "thermometer" },
    { title: "Suhu dan Kalor", locked: true, icon: "fire" },
    { title: "Gelombang Elektromagnetik", locked: true, icon: "antenna" },
    { title: "Listrik Statis", locked: true, icon: "lightning-bolt" },
    { title: "Listrik Dinamis", locked: true, icon: "current-ac" },
    { title: "Hukum Newton", locked: true, icon: "apple" },
    { title: "Coming Soon", comingSoon: true, icon: "clock-outline" }
  ];

  const randomTip = () => {
    const tips = [
      "Hukum Ohm: V = I * R",
      "Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah bentuknya.",
      "Percepatan gravitasi di Bumi sekitar 9.8 m/s².",
      "Cahaya bergerak dengan kecepatan 299,792,458 m/s dalam ruang hampa.",
      "Hukum Newton Pertama: Sebuah benda akan tetap diam atau bergerak dengan kecepatan konstan kecuali ada gaya yang bekerja padanya.",
      "Hukum Newton Kedua: F = m * a",
      "Hukum Newton Ketiga: Untuk setiap aksi ada reaksi yang sama besar dan berlawanan arah.",
      "Momentum adalah hasil kali massa dengan kecepatan: p = m * v",
      "Energi kinetik adalah energi yang dimiliki benda karena geraknya: Ek = 1/2 * m * v²",
      "Energi potensial gravitasi adalah energi yang dimiliki benda karena posisinya: Ep = m * g * h"
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title style={styles.title}>Simulasi Fisika Dasar Virtual</Title>
        
        <Card style={styles.tipCard}>
          <Card.Content>
            <Title>Tip Fisika Hari Ini</Title>
            {showTip ? (
              <Paragraph>{randomTip()}</Paragraph>
            ) : (
              <Button mode="contained" onPress={() => setShowTip(true)}>
                Tampilkan Tip
              </Button>
            )}
          </Card.Content>
        </Card>

        <View style={styles.topicsContainer}>
          {topics.map((topic, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (topic.locked) {
                  alert("Topik ini masih terkunci.");
                } else if (topic.comingSoon) {
                  alert("Topik lainnya akan tersedia segera!");
                } else {
                  navigation.navigate(topic.route);
                }
              }}
              style={[styles.topicCard, topic.locked && styles.lockedTopic]}
            >
              <Card>
                <Card.Content style={styles.cardContent}>
                  <Icon name={topic.icon} size={24} color={topic.locked ? Colors.grey500 : Colors.blue500} />
                  <Text style={styles.topicTitle}>{topic.title}</Text>
                  {topic.locked && <Icon name="lock" size={16} color={Colors.grey500} style={styles.lockIcon} />}
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>


        <Button mode="contained" onPress={handleLogout} style={styles.logoutButton}>
          Logout
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.blue800,
  },
  tipCard: {
    marginBottom: 20,
    elevation: 4,
  },
  articleCard: {
    marginBottom: 20,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: Colors.blue800,
  },
  articleItem: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.blue700,
  },
  articleContent: {
    fontSize: 14,
    color: Colors.grey800,
    marginBottom: 5,
  },
  articleDate: {
    fontSize: 12,
    color: Colors.grey600,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  topicCard: {
    width: '48%',
    marginBottom: 15,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  topicTitle: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 12,
  },
  lockedTopic: {
    opacity: 0.6,
  },
  lockIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  logoutButton: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: Colors.red500,
  },
});

export default HomeScreen;