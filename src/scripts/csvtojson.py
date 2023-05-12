import json
import pandas as pd
import numpy as np

# Define the input and output file paths
csv_file_path = 'data/Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.csv'

# FEATURE SELECTION STARTS HERE
df = pd.read_csv(csv_file_path)

df.columns = df.columns.str.lstrip()
df.columns = df.columns.str.replace(' ', '_')
df.columns = df.columns.str.replace('/s', '_s')
df.columns = df.columns.str.replace('Fwd_Header_Length.1', 'Fwd_Header_Length1')
df.replace([np.inf, -np.inf], np.nan, inplace=True)
df=df.fillna(0)
df["Target"] = np.where(df["Label"] == "BENIGN", 0, 1)

features = np.float32(df.loc[:, ~df.columns.isin(['Flow_ID', 'Source_IP', 'Destination_IP', 'Timestamp', 'Label', 'Target'])].copy().values) #reduce memory usage
label = df.loc[:, df.columns.isin(['Target'])].copy().values.ravel()

from sklearn.ensemble import RandomForestClassifier #use this when label is categorical

# Train a random forest classifier on the dataset
forest = RandomForestClassifier(n_estimators = 100, random_state=42)
forest.fit(features, label)

# Get the feature importances and sort them in descending order
importances = forest.feature_importances_
sorted_indices = importances.argsort()[::-1]
feature_names = df.loc[:, ~df.columns.isin(['Flow_ID', 'Source_IP', 'Destination_IP', 'Timestamp', 'Label', 'Target'])].copy().columns

# Print the top 10 features by importance
top_features = 10
feats = []
for index in sorted_indices[:top_features]:
    feats.append(feature_names[index])

df = df[feats]

data = df.to_dict('records')

json_file_path = 'data/filt_data.json'
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file, indent=4)