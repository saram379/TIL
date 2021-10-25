from matplotlib import pyplot as plt
import numpy as np

x=np.arange(1,10)
y=x*5

plt.plot(x,y,'c')
plt.xlabel('x axis')
plt.ylabel('y axis')
plt.title('basic of basic')
plt.xlim(2,3)
plt.ylim(5,20)
plt.show()
