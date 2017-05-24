names = ["Chris","Oggi", "Emily"]

def namesWork names_array
    names_array.map! { |name| name + " works here" }
    p names_array
end

namesWork(names)
