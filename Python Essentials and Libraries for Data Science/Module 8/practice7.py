import pymysql
conn = pymysql.connect(host='localhost',port=3306,user='root',password='',db='amazon')
a = conn.cursor()
client = input("Enter customer name: ")
phone = input("Enter customer phone: ")
bill_amt = input("Enter customer bill amt: ")
sql = "insert into customer values('" + client + "','" + phone + "','" + bill_amt + "')"
print(sql)
a.execute(sql)
conn.commit()