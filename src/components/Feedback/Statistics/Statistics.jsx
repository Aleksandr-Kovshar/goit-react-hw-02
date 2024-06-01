import React, { Component } from "react";
import { ListStatistics } from "./Statistics.styled";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ListStatistics>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage} %</li>
    </ListStatistics>
  );
};
export default Statistics;
