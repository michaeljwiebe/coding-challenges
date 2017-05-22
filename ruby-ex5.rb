require 'minitest/autorun'
require 'minitest/pride'

def fizzbuzz num
    string = ""
    string += "Fizz" if num % 3 == 0
    string += "Buzz" if num % 5 == 0
    string != "" ? string : num


end

class IfChallenge < MiniTest::Test
  def test_one
    assert_equal 1, fizzbuzz(1)
  end

  def test_three
    assert_equal "Fizz", fizzbuzz(3)
  end

  def test_five
    assert_equal "Buzz", fizzbuzz(5)
  end

  def test_eight
    assert_equal 8, fizzbuzz(8)
  end

  def test_ten
    assert_equal "Buzz", fizzbuzz(10)
  end

  def test_fifteen
    assert_equal "FizzBuzz", fizzbuzz(15)
  end

  def test_twenty_three
    assert_equal 23, fizzbuzz(23)
  end

  def test_thirty
    assert_equal "FizzBuzz", fizzbuzz(30)
  end
end
