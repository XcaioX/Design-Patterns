class Journal:
  def __init__(self):
    self.entries = []
    self.count = 0
  
  def add_entry(self, text):
    self.count += 1
    self.entries.append(f'{self.count}: {text}')

  def delete_entry(self, idx):
    del self.entries[idx]
  
  def __str__(self):
    return '\n'.join(self.entries)

class PersistenceManager:
  
  @staticmethod
  def save_to_file(journal, filename):
    file = open(filename, 'w')
    file.write(str(journal))
    file.close()

  
j = Journal()
j.add_entry('I cried');
j.add_entry('I ate a bug!');
print(j)

p = PersistenceManager()
filename = '/home/kxk/Documents/Projects/Design-Patterns/python/SOLID/file.txt'
p.save_to_file(j, filename)