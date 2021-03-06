require 'minitest/autorun'
require 'minitest/pride'

#   * 'first_name': given a name in string, return the first name.
#   * 'last_name': given a name in string, return the last name.

def first_name string
    string == string.split(" ")
    split_string = string.split(" ")
    split_string.length > 1 ? split_string.pop.join(" ") : split_string.first
end
def last_name string
    string == string.split(" ")
    split_string = string.split(" ")
    split_string.length > 1 ? split_string.last : ""
end

first_name("Chris Foster")
last_name("Chris Foster")

class StringSplitChallenge < MiniTest::Test
  def test_first_name
    assert_equal "Chris", first_name("Chris Foster")
  end

  def test_last_name
    assert_equal "Foster", last_name("Chris Foster")
  end

  def test_one_word_name
    assert_equal "deadmou5", first_name("deadmou5")
    assert_equal "", last_name("deadmou5")
  end

  def test_three_word_name
    assert_equal "John Quincy", first_name("John Quincy Adams")
    assert_equal "Adams", last_name("John Quincy Adams")
  end

  def test_no_word_name
    assert_equal "", first_name("")
    assert_equal "", last_name("")
  end
end
