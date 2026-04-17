import threading as th
import time

class mythread(th.Thread):
    def run(self):
        for i in range(5):
            print(self.getName())
            time.sleep(2)

# create threads
t1 = mythread()
t2 = mythread()
t3 = mythread()

# set thread names
t1.setName("India")
t2.setName("Japan")
t3.setName("Russia")

# start threads
t1.start()
t1.join()   # ensures t1 finishes first

t2.start()
t3.start()