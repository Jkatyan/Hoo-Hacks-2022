import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Enter in data to predict time taken
expected = 20

data = \
    [
        [0, 1],
        [1, 8],
        [2, 13],
        [2, 9],
        [2, 2],
        [3, 16],
        [4, 20],
        [40, 20]
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

