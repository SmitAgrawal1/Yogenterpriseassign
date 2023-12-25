
# Define persons using a list of dictionaries
persons = [
    {"name": "Alice", "age": 28, "city": "New York"},
    {"name": "Bob", "age": 22, "city": "Los Angeles"},
    {"name": "Charlie", "age": 30, "city": "Chicago"}
]


# Create an empty list to store filtered persons
filtered_persons = []

# Loop through each person in the list
for person in persons:
    # Check if the person's age is 25 or older
    if person["age"] >= 25:
        # Adding the person to the filtered list
        filtered_persons.append(person)


# Sort the list of filtered persons by city name
sorted_persons = sorted(filtered_persons, key=lambda x: x["city"])


# Display the final list of persons with their details
for person in sorted_persons:
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")
