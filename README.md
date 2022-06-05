# Slang recognition in context of spellchecking & fine tuning BERT to it

This repository contains all code that was produced to complete NLP project in Warsaw University of Technology in the year 2022. For the project description & results refer to `report.pdf`

## Grammatical correctness
In this section we'll go over the files that are a part of the experiments for evaluating how slang influences recognizing grammaticaly correct sentences
### cola.json and cola_odd.json files
json arrays containing sentences from cola train and validation datasets transformed with https://lingojam.com/InternetSlangTranslator2-0
### feed_sentences.js
JavaScript code to be copy-pasted into the console of https://lingojam.com/InternetSlangTranslator2-0 website. It'll transform an array of strings to slanged version of each string. The data to be transformed is to be put into `data` variable
### grammar_correctness_experiments.ipynb
The notebook which generates plots for the project report. This notebook is to be run in https://colab.research.google.com/. To run the script, both cola.json and cola_odd.json files need to be uploaded to colab storage first.

## Sentence similarity
In this section we'll go over the files that are a part of the experiments for evaluating how slang influences classifying semantic similarity of sentences
### mrpc_slang.json and mrpc_normal.txt files
files needed to create normal to slang dictionary
### SemanticSimilaritySlang.ipynb
This is notebook regarding semantic similarity. The notebook which generates plots for the project report. This notebook is to be run in https://colab.research.google.com/. To run the script, both mrpc_slang.json and mrpc_normal.txt files need to be uploaded to colab storage first.
