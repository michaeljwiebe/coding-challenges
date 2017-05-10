# Write a method that takes an amount and makes an array out of it using the lowest number of coins available. For example:

# >> make_change(39)
# => [25, 10, 1, 1, 1, 1]

def make_change num
	coins = [25, 10, 5, 1]
	change = []
	coins.each do |coin|
		while num / coin >= 1
			num = num - coin
			change << coin
		end
	end
	p change
end

make_change 139