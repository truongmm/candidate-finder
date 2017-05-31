# candidate-finder

### List of Features
- Cleaning of data (i.e. remove trailing white space and unicode characters)
- Check for abbreviations when validating name (e.g. 'M. Truong' could be 'Melody Truong')
- Validation of urls (i.e. urls are a match if hostname and pathname are the same)
- Use of weights for each of the data keys to calculate the simlarity rate

### Future Implementations
- Add validators for resume section
- Check for related terms. For example:
  - Location: 'San Francisco' is the same as 'San Francisco Bay Area' and 'S.F.'
  - School: 'University of California, Irvine' is the same as 'UCI'
  - Company: 'Groupon Inc.' is the same as 'Groupon'
- Expand location validator by checking nearby cities
- Add phone number and email to database since they are unique indicators

### Example Output
![output](https://cloud.githubusercontent.com/assets/5839078/26620580/3f5bd168-4598-11e7-933c-e69e84dd8ef3.png)
