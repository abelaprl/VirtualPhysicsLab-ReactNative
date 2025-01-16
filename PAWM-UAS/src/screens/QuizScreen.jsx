import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title, Paragraph, ProgressBar } from 'react-native-paper';
import { ref, set, get } from 'firebase/database';
import { database, auth, formatEmail } from '../firebase';

const QuizScreen = ({ navigation }) => {
  const [answers, setAnswers] = useState({});
  const [savedQuestions, setSavedQuestions] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([
    { id: 'q1', question: 'Apa itu Hukum Ohm?', correctAnswer: 'Hukum Ohm adalah hubungan antara tegangan, arus, dan hambatan.' },
    { id: 'q2', question: 'Bagaimana rumus Hukum Ohm?', correctAnswer: 'V = I * R' },
    { id: 'q3', question: 'Apa satuan yang digunakan dalam Hukum Ohm?', correctAnswer: 'Ohm' },
  ]);

  useEffect(() => {
    loadPreviousAnswers();
    loadPreviousSubmission();
  }, []);

  const saveAnswer = async (questionId) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first.");
      navigation.replace('Auth');
      return;
    }

    const answer = answers[questionId];
    if (answer.trim() === "") {
      alert("Jawaban tidak boleh kosong!");
      return;
    }

    try {
      const userRef = ref(database, `user/${formatEmail(user.email)}/answers/${questionId}`);
      await set(userRef, {
        answer: answer,
        timestamp: Date.now()
      });
      setSavedQuestions(prev => ({ ...prev, [questionId]: true }));
      alert("Jawaban berhasil disimpan!");
    } catch (error) {
      console.error("Error saving answer:", error);
      alert("Error: " + error.message);
    }
  };

  const loadPreviousAnswers = async () => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(database, `user/${formatEmail(user.email)}/answers`);
      try {
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const loadedAnswers = {};
          const loadedSavedQuestions = {};
          Object.keys(data).forEach(questionId => {
            if (data[questionId].answer) {
              loadedAnswers[questionId] = data[questionId].answer;
              loadedSavedQuestions[questionId] = true;
            }
          });
          setAnswers(loadedAnswers);
          setSavedQuestions(loadedSavedQuestions);
        }
      } catch (error) {
        console.error("Error loading answers:", error);
      }
    }
  };

  const submitQuiz = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first.");
      navigation.replace('Auth');
      return;
    }

    let currentScore = 0;
    questions.forEach(question => {
      if (answers[question.id]?.toLowerCase() === question.correctAnswer.toLowerCase()) {
        currentScore++;
      }
    });

    try {
      const scoreRef = ref(database, `score/${formatEmail(user.email)}`);
      await set(scoreRef, {
        score: currentScore,
        timestamp: Date.now()
      });
      setScore(currentScore);
      setSubmitted(true);
      alert("Quiz submitted successfully!");
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("Error submitting quiz: " + error.message);
    }
  };

  const loadPreviousSubmission = async () => {
    const user = auth.currentUser;
    if (user) {
      const scoreRef = ref(database, `score/${formatEmail(user.email)}`);
      try {
        const snapshot = await get(scoreRef);
        if (snapshot.exists()) {
          const scoreData = snapshot.val();
          setScore(scoreData.score);
          setSubmitted(true);
        }
      } catch (error) {
        console.error("Error loading submission:", error);
      }
    }
  };

  const progress = Object.values(savedQuestions).filter(Boolean).length / questions.length;

  return (
    <ScrollView style={styles.container}>
      <Title>Latihan Hukum Ohm</Title>
      <ProgressBar progress={progress} color="#87cefa" style={styles.progressBar} />
      {questions.map((question) => (
        <View key={question.id} style={styles.formGroup}>
          <Paragraph>{question.question}</Paragraph>
          <TextInput
            value={answers[question.id] || ''}
            onChangeText={(text) => setAnswers(prev => ({ ...prev, [question.id]: text }))}
            style={styles.input}
          />
          <Button onPress={() => saveAnswer(question.id)} mode="contained" style={styles.button}>
            Save
          </Button>
        </View>
      ))}
      {!submitted && (
        <Button onPress={submitQuiz} mode="contained" style={styles.submitButton}>
          Submit Quiz
        </Button>
      )}
      {submitted && score !== null && (
        <View style={styles.resultContainer}>
          <Title>Hasil Akhir:</Title>
          <Paragraph>Nilai: {score} / {questions.length}</Paragraph>
        </View>
      )}
      <Button onPress={() => navigation.goBack()} mode="outlined" style={styles.backButton}>
        Kembali
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progressBar: {
    marginVertical: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 5,
  },
  submitButton: {
    marginTop: 20,
  },
  backButton: {
    marginTop: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default QuizScreen;