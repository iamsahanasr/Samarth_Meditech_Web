---
layout: '../../layouts/BlogPost.astro'
title: My first blog
date: 2022-11-05
tags: ['seeds','aiml','CSE']
draft: true
---
One of the most important thing in wheat production is the seeds. The quality of seeds and being seeds consist of only wanted species of wheat is so important. With low quality seeds it is inevitable to achieve low efficiency. Additionally, mixes of unwanted species in the seeds creates extra costs on the result product to select them. 
To avoid these problems, a machine vision based selection study has been proposed. In this study some characteristic parameters that have been obtained from images taken from seeds, have been used to determine class of wheat. The attributes of this dataset are area, perimeter, compactness, length, width asymmetry coefficient and length of kernel groove. 60% of the dataset has been used to train an 
Artificial Neural Network (ANN) and rest of the dataset has been used for tests. To obtain best structure of ANN, the number of neurons in the hidden layer of ANN has been changed within 1 to 40. And the activation function of hidden layer and output layer has been investigated for best result. Hyperbolic tangent sigmoid (Tansig), Logarithmic Sigmoid (LogSig) and Linear (PureLin) transfer functions have been used as activation function. The prepared ANN structures have been trained various training functions. 
The Root Mean Square Error (RMSE) and Mean Absolute Error (MAE) have been used as performance criteria. All of the results of the researches have been compared and the best results have been obtained as 0.1598 RMSE and 0.0273 MAE. The structure that has the best results, has consisted of 25 neurons in the hidden layer with hyperbolic tangent sigmoid activation function. And this structure has been trained by Levenberg-Marquardt backpropagation function.