rainfall = {"kar":12, "mah":20, "ker":22, "tn":23}

max_rain = max(rainfall.values())

for s in rainfall.keys():
    if rainfall.get(s) == max_rain:
        print(s)