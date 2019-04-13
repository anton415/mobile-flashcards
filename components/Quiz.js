import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { deleteDeck } from '../actions'
import { removeDeck } from '../utils/api'
import { getDailyReminderValue, clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { gray, white, green } from '../utils/colors'

ActionButton = ({ action, label, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={
        disabled
          ? { height: 45, backgroundColor: gray, alignSelf: "center" }
          : styles.submitBtn
      }
      onPress={action}
    >
      <Text style={styles.submitBtnText}>{label}</Text>
    </TouchableOpacity>
  );
};

class Quiz extends Component {
  state = {
    questionIndex: 0,
    side: "question",
    correctAnswers: 0,
    answeredQuestions: 0,
    disabled: false
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Quiz"
    };
  };

  goBack = () => this.props.navigation.goBack();

  render() {
    const { questions, title } = this.props.deck;
    const len = questions.length;
    const {
      questionIndex,
      side,
      correctAnswers,
      disabled,
      answeredQuestions
    } = this.state;
    const score =
      correctAnswers === 0
        ? 0
        : Math.round((correctAnswers / answeredQuestions) * 100);
    const questionsLeft = len - questionIndex - 1;

    if (len === 0) {
      return (
        <Text style={styles.item}>
          Sorry, there are no cards in this deck. Add some cards to this deck
          and then start the quiz.
        </Text>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.item}>{questionsLeft} question(s) left</Text>
        <Text style={styles.questions}>
          {this.state.side === "question"
            ? questions[questionIndex].question
            : questions[questionIndex].answer}
        </Text>

        <ActionButton
          action={() => {
            return this.setState(prevState => {
              if (prevState.side === "question") {
                return { side: "answer" };
              }
              return { side: "question" };
            });
          }}
          label={
            this.state.side === "question" ? "SHOW ANSWER" : "SHOW QUESTION"
          }
        />
        {this.state.side === "answer" ? (
          <View style={styles.rowContainer}>
            <ActionButton
              action={() => {
                return this.setState(prevState => {
                  return {
                    correctAnswers: prevState.correctAnswers + 1,
                    disabled: true,
                    answeredQuestions: prevState.answeredQuestions + 1
                  };
                });
              }}
              disabled={disabled}
              label={"CORRECT"}
            />
            <ActionButton
              action={() => {
                return this.setState(prevState => {
                  return {
                    disabled: true,
                    answeredQuestions: prevState.answeredQuestions + 1
                  };
                });
              }}
              disabled={disabled}
              label={"INCORRECT"}
            />
          </View>
        ) : null}
        {questionIndex + 1 < len ? (
          <ActionButton
            disabled={!disabled}
            action={() => {
              return this.setState(prevState => {
                return {
                  disabled: false,
                  side: "question",
                  questionIndex: prevState.questionIndex + 1
                };
              });
            }}
            label={"NEXT QUESTION"}
          />
        ) : disabled === true ? (
          <View>
            <Text style={styles.item}>Score: {score}%</Text>

            <ActionButton
              action={() => {
                clearLocalNotification().then(setLocalNotification);
                return this.setState({
                  questionIndex: 0,
                  side: "question",
                  correctAnswers: 0,
                  answeredQuestions: 0,
                  disabled: false
                });
              }}
              label={"RESTART QUIZ"}
            />
            <ActionButton
              action={() => this.props.navigation.goBack()}
              label={"BACK TO DECK"}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
    justifyContent: "space-around"
  },
  rowContainer: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  submitBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  item: {
    fontSize: 20,
    textAlign: "center",
    padding: 5,
    color: gray
  },
  questions: {
    fontSize: 40,
    textAlign: "center",
    padding: 5
  }
});

function mapStateToProps({ decks }, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deck: decks[deckId]
  };
}

export default connect(mapStateToProps)(Quiz);
