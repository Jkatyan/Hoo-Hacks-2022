import json
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Opening JSON file
f = open('data.json')

# returns JSON object as
# a dictionary
data = json.load(f)

# Iterating through the json
# list
math = []
mathweb = []
biol = []
biolfrq = []
biolpre = []
biollab = []
cs1 = []
cs2 = []
cs3 = []
psych = []
psychnotes = []
expectedHours = 0
for i in data["assignment"]:
    subject = i["subject"]
    subType = i["sub-type"]
    expectedHours = i["expected-hours"]
    actualHours = i["actual-hours"]
    if actualHours is not None:
        if subject == "math":
            if subType == "writtenHWs":
                math.append([expectedHours, actualHours])
            elif subType == "WebAssign":
                mathweb.append([expectedHours, actualHours])
        elif subject == "biol":
            if subType == "Notes":
                biol.append([expectedHours, actualHours])
            elif subType == "FRQ":
                biolfrq.append([expectedHours, actualHours])
        elif subject == "biol lab":
            if subType == "Prelab":
                biolpre.append([expectedHours, actualHours])
            elif subType == "labReport":
                biollab.append([expectedHours, actualHours])
        elif subject == "cs":
            if subType == "EX":
                cs1.append([expectedHours, actualHours])
            elif subType == "QC":
                cs2.append([expectedHours, actualHours])
            elif subType == "Projects":
                cs3.append([expectedHours, actualHours])
        elif subject == "psych":
            if subType == "Reflections":
                psych.append([expectedHours, actualHours])
            elif subType == "Notes&HW":
                psychnotes.append([expectedHours, actualHours])

# Closing file
f.close()

#Math Written HW
given_time = np.array(math)[:, 0].reshape(-1, 1)
predicted_time = np.array(math)[:, 1].reshape(-1, 1)

regressionMath = LinearRegression()
regressionMath.fit(given_time, predicted_time)

#Math WebAssign
given_time = np.array(mathweb)[:, 0].reshape(-1, 1)
predicted_time = np.array(mathweb)[:, 1].reshape(-1, 1)

regressionMathWeb = LinearRegression()
regressionMathWeb.fit(given_time, predicted_time)

#Biol Notes
given_time = np.array(biol)[:, 0].reshape(-1, 1)
predicted_time = np.array(biol)[:, 1].reshape(-1, 1)

regressionBiol = LinearRegression()
regressionBiol.fit(given_time, predicted_time)

#Biol FRQ
given_time = np.array(biolfrq)[:, 0].reshape(-1, 1)
predicted_time = np.array(biolfrq)[:, 1].reshape(-1, 1)

regressionBiolFrq = LinearRegression()
regressionBiolFrq.fit(given_time, predicted_time)

#Biol Prelab
given_time = np.array(biolpre)[:, 0].reshape(-1, 1)
predicted_time = np.array(biolpre)[:, 1].reshape(-1, 1)

regressionBiolPre = LinearRegression()
regressionBiolPre.fit(given_time, predicted_time)

#Biol Lab report
given_time = np.array(biollab)[:, 0].reshape(-1, 1)
predicted_time = np.array(biollab)[:, 1].reshape(-1, 1)

regressionBiolLab = LinearRegression()
regressionBiolLab.fit(given_time, predicted_time)

#CS ex
given_time = np.array(cs1)[:, 0].reshape(-1, 1)
predicted_time = np.array(cs1)[:, 1].reshape(-1, 1)

regressionCSex = LinearRegression()
regressionCSex.fit(given_time, predicted_time)

#CS qc
given_time = np.array(cs2)[:, 0].reshape(-1, 1)
predicted_time = np.array(cs2)[:, 1].reshape(-1, 1)

regressionCSqc = LinearRegression()
regressionCSqc.fit(given_time, predicted_time)

#CS projects
given_time = np.array(cs3)[:, 0].reshape(-1, 1)
predicted_time = np.array(cs3)[:, 1].reshape(-1, 1)

regressionCSproj = LinearRegression()
regressionCSproj.fit(given_time, predicted_time)

#Psych reflections
given_time = np.array(psych)[:, 0].reshape(-1, 1)
predicted_time = np.array(psych)[:, 1].reshape(-1, 1)

regressionPsych = LinearRegression()
regressionPsych.fit(given_time, predicted_time)

#Psych Notes
given_time = np.array(psychnotes)[:, 0].reshape(-1, 1)
predicted_time = np.array(psychnotes)[:, 1].reshape(-1, 1)

regressionPsychNote = LinearRegression()
regressionPsychNote.fit(given_time, predicted_time)

# Opening JSON file
f = open('data.json')

# returns JSON object as
# a dictionary
data = json.load(f)



expectedHours = 0
for i in data["assignment"]:
    subject = i["subject"]
    subType = i["sub-type"]
    expectedHours = i["expected-hours"]
    actualHours = i["actual-hours"]
    predictedHours = i["predicted-hours"]
    if actualHours is None:
        if subject == "math":
            if subType == "writtenHWs":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionMath.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
            elif subType == "WebAssign":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionMathWeb.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
        elif subject == "biol":
            if subType == "Notes":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionBiol.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
            elif subType == "FRQ":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionBiolFrq.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
        elif subject == "biol lab":
            if subType == "Prelab":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionBiolPre.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
            elif subType == "labReport":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionBiolLab.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
        elif subject == "cs":
            if subType == "EX":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionCSex.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
            elif subType == "QC":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionCSqc.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
            elif subType == "Projects":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionCSproj.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
        elif subject == "psych":
            if subType == "Reflections":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionPsych.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)
            elif subType == "QC":
                predict = [expectedHours]
                predict = np.array(predict).reshape(-1, 1)
                output = regressionPsychNote.predict(predict)
                i["predicted-hours"] = int(output)
                with open('expected.json', 'w') as json_file:
                    json.dump(data["assignment"], json_file)

# Closing file
f.close()