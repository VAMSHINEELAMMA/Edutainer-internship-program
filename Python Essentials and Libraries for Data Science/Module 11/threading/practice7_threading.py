import threading

class mythread(threading.Thread):
    def run(self):
        print("Thread is executed")

t1 = mythread()
t1.start()
t1.join()