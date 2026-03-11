---
title: "Teaching a Model to Recognize a DDoS Attack"
description: "A practical ML workflow on CIC-IDS 2017 for flow-level DDoS detection, with a focus on preprocessing integrity."
category: "Machine Learning"
date: "December 8, 2025"
---

![Flow-level classification pipeline](/images/blog/ddos-ml/pipeline.svg)

One of the simplest ways to break a website is also one of the most effective. Instead of hacking into a system, you can just overwhelm it with traffic until it stops responding. That is essentially what a Distributed Denial of Service (DDoS) attack does.

For a machine learning project, I wanted to see how well standard ML models could detect this kind of attack using network traffic data. The idea was straightforward: if we give a model enough examples of normal traffic and attack traffic, can it learn to tell the difference?

This project was less about building a production intrusion detection system and more about understanding how different models behave on real network telemetry.

## The Dataset

The dataset I used comes from CIC-IDS 2017, which is commonly used in intrusion detection research. I worked with the file:

`Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.csv`

Instead of raw packet data, the dataset contains flow-level statistics. Each row represents a network flow and includes features such as:

- flow duration
- number of packets
- byte transfer rates
- packet length statistics
- header flags

Each row is labeled either `BENIGN` or `DDoS`.

The file contains over 225,000 rows and more than 70 features, which is large enough for training machine learning models without needing additional data.

To simplify the classification task, I converted the labels into binary values:

- `0` = benign traffic
- `1` = DDoS traffic

## Cleaning the Data

Before training anything, the dataset needed some basic cleaning.

Network capture datasets often contain missing values or infinite values because of how flows are calculated. I removed rows that contained NaN or infinite values and also dropped duplicate rows.

Some column names also contained whitespace, which caused issues during preprocessing, so those were cleaned as well.

After this step I verified that all features were numeric and that the dataset shape still made sense.

## Looking at the Data

Before jumping into models, I ran some quick exploratory analysis.

First I checked the basic statistics using `describe()` and `info()` to understand the ranges of the features. I also plotted the class distribution to see how many benign versus attack samples existed.

A correlation heatmap showed that some packet-related features were strongly correlated. Since I planned to use models like Random Forest that handle correlated features well, I left them as they were.

## Splitting the Data

The dataset was split into training and testing sets using a 70/30 split.

The split was stratified, which means the proportion of benign and attack traffic stayed the same in both sets. This is important when working with classification problems because random splitting can sometimes distort the class distribution.

## Models I Tried

Instead of focusing on one algorithm, I trained three different types of models.

The goal was to see how a simple linear model, an ensemble model, and a neural network compare on the same dataset.

### Random Forest

The first model I trained was a Random Forest classifier with 100 trees.

Random Forest works by training many decision trees and combining their predictions. Because each tree looks at slightly different parts of the data, the ensemble tends to be very robust.

One nice property of Random Forest is that it also provides feature importance scores, which help show which variables the model relies on most.

### Logistic Regression

Next I trained Logistic Regression.

This model is much simpler and assumes a linear relationship between features and the outcome. Because of that assumption, the features were standardized using `StandardScaler` before training.

Logistic Regression is often used as a baseline model, but it is also easier to interpret because the coefficients show how each feature influences predictions.

### Neural Network

The third model was a small neural network using scikit-learn's `MLPClassifier`.

The architecture was simple:

- one hidden layer
- 10 neurons
- 300 training iterations

Even with minimal tuning, neural networks can capture nonlinear relationships that linear models miss.

## Evaluating the Models

To compare the models I used several metrics:

- accuracy
- precision
- recall
- F1 score
- ROC-AUC

Confusion matrices were also plotted to visualize the number of false positives and false negatives.

![Model comparison](/images/blog/ddos-ml/model-comparison.svg)

## Results

All three models performed well, but Random Forest clearly performed the best.

| Model | Accuracy | F1 Score |
| --- | --- | --- |
| Random Forest | ~0.9999 | ~0.9999 |
| Neural Network | ~0.983 | ~0.984 |
| Logistic Regression | ~0.947 | ~0.951 |

Logistic Regression had slightly lower accuracy but very high recall, which means it detected most attacks.

The neural network performed almost as well as Random Forest even without heavy tuning.

One interesting issue appeared during the ROC analysis. Initially the Random Forest showed an AUC of around 0.60, which didn't make sense given the near-perfect accuracy.

After debugging, I realized I was feeding scaled test data into a model that had been trained on unscaled features. Once the inputs were corrected, the AUC jumped to around 0.9996.

It was a small mistake but a useful reminder that preprocessing needs to stay consistent between training and evaluation.

![Preprocessing drift illustration](/images/blog/ddos-ml/preprocessing-drift.svg)

## What I Learned

A few things stood out from this project.

First, traditional machine learning models still work extremely well on structured network data.

Second, preprocessing decisions matter more than people often expect. Small inconsistencies in the pipeline can produce misleading results.

Finally, different models offer different advantages:

- Random Forest performs best in terms of raw accuracy.
- Logistic Regression is easier to interpret.
- Neural networks capture nonlinear patterns but require more care when training.

## Where This Could Go Next

If I were extending this project, there are a few directions that would be interesting to explore:

- using the full CIC-IDS dataset with multiple attack categories
- evaluating models with cross-validation instead of a single split
- building a real-time detection pipeline
- experimenting with deep learning models on packet-level data

For now though, this project was a useful exercise in building a full machine learning workflow on a real cybersecurity dataset.
