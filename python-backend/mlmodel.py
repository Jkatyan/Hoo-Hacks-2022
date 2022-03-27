import json
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

subject = i["subject"]
subType = i["sub-type"]
expectedHours = i["expected-hours"]
actualHours = i["actual-hours"]

if subject = "math":
    if type == 'writtenHWs':
        
        weightage = 30

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [2, 3]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))
    elif type 'WebAssign':
        weightage = 20

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [2, 3]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))
elif subject == "biol":
    if type == 'notes':
        weightage = 20

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [3, 4]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))
        
    elif type == 'frq':
        weightage = 40

        # Enter in data to predict time taken
        expected = 3

        data = \
            [
                [2, 3]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))

elif subject == 'biollab':
    if type == 'reports':
        weightage = 20

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [5, 3]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))

    elif type == 'prelab':
        weightage = 50

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [1, 3]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))
        
elif subject == 'cs':
    if type == 'ex':
        weightage = 10

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [2, 3]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))

    elif type == 'qc':
        weightage = 20

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [3, 5]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))
        
    elif type == 'projects':
        weightage = 60

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [8, 7]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))
elif subject == 'psych':
    if type == 'reflections':
        weightage = 40

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [3, 3]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))
        
    elif type == 'notes&HW':
        weightage = 30

        # Enter in data to predict time taken
        expected = 2

        data = \
            [
                [2, 3]
                
            ]
        given_time = np.array(data)[:, 0].reshape(-1, 1)
        predicted_time = np.array(data)[:, 1].reshape(-1, 1)

        predict = [expected]
        predict = np.array(predict).reshape(-1, 1)

        regression = LinearRegression()
        regression.fit(given_time, predicted_time)

        output = regression.predict(predict)

        print("Expected: " + str(expected))
        print("Actual (Prediction): " + str(int(output)))


        

