# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting existing data..."

puts "Seeding users..."

user_bank = [
    "Michael Scott", "Liz Lemon", "Jeff Winger", "Michael Bluth", "Leslie Knope",
    "Jake Peralta", "Phillip J. Fry", "Peter Griffin", "Dee Reynolds", "Morty Smith", 
    "Jessica Day"
]
user_list = []
user_bank.each_with_index do |b, i|
    user_list.push({
        name: b,
        age: rand(18..90),
        risk_profile: rand(1..30),
        username: "user#{101 + i}",
        password_digest: "temptemptemp"
    })
end
users = User.create(user_list)


puts "Seeding preferences..."

preferences = Preference.create([
    {
        question: "What is your risk tolerance or willingness to take financial risk?",
        choice_1: "Very Low",
        choice_2: "Low",
        choice_3: "Medium",
        choice_4: "High",
        choice_5: "Very High",
    },
    {
        question: "What is your preference when holding risky assets?",
        choice_1: "Maximize Safety",
        choice_2: "Mostly Safety",
        choice_3: "Mix of Safety and Return",
        choice_4: "Mostly Return",
        choice_5: "Maximize Return",
    },
    {
        question: "How knowledgeable are you about cryptocurrency and blockchain technologies?",
        choice_1: "Not at All Knowledgable",
        choice_2: "Minimally Knowledgeable",
        choice_3: "Moderately Knowledgeable",
        choice_4: "Competent",
        choice_5: "Very Knowledgeable",
    },
    {
        question: "How much experience do you have with investing in cryptocurrency?",
        choice_1: "None",
        choice_2: "Very Little",
        choice_3: "Some",
        choice_4: "Modest",
        choice_5: "Extensive",
    },
    {
        question: "What is your perception on the riskiness of the cryptocurrency market?",
        choice_1: "Very Risky",
        choice_2: "Somewhat Risky",
        choice_3: "Neutral",
        choice_4: "Somewhat Safe",
        choice_5: "Very Safe",
    },
    {
        question: "In the past when faced with investment losses, what action did you take?",
        choice_1: "Sold Entire Investment (Paper Hands)",
        choice_2: "Sold Part of Investment",
        choice_3: "Did Nothing",
        choice_4: "Bought Small Amount More",
        choice_5: "Bought Significant Amount More (Diamond Hands)",
    },
    
])

puts "Seeding user_preferences..."
users.length.times do |t|
    user_id = users[t].id
    preferences.length.times do |w|
        preference_id = preferences[w].id
        choice_value = rand(1..5)
        UserPreference.create({
            user_id: user_id,
            preference_id: preference_id,
            choice_value: choice_value
        })
    end
end


puts "Done!"