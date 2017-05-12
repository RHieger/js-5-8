# Lesson-01 Homework

## Assignments 2 &amp; 3

Given the 2 following directory structures, what would be the list of terminal commands in order to create it:

#### First One

`~/Sites/my-awesome-directory/nested-directory`  
`~/Sites/my-awesome-directory/nested-directory/hello.txt`  
`~/Sites/terminals-are-fun.txt`

#### _Answer:_

`$ mkdir ~/Sites`  
`$ cd ~/Sites`  
`$ touch terminals-are-fun.txt`  
`$ mkdir my-awesome-directory`  
`$ cd my-awesome-directory`  
`$ mkdir nested-directory`  
`$ cd nested-directory`  
`$ touch terminals-are-fun.txt`

#### _Alternate Answer (and caviat)_

`$ mkdir -p ~/Sites/my-awesome-directory/nested-directory`  
`$ cd ~/Sites`  
`$ touch terminals-are-fun.txt`  
`$ cd my-awesome-directory/nested-directory`  
`$ touch hello.txt`

#### _Caviat:_

The alternate answer has the virtue of being 5, rather than 8 lines
of terminal commands. But it&apos;s important to be aware of a couple
of things:

1. The `-p` command switch does create intermediate directories making it possible to create the entire directory tree in one line. However, as the BSD Unix man page states, &ldquo;&hellip;with this option specified, no error will be reported if a directory given as an operand already exists&hellip;&rdquo;
<br /><br />
2. The `mkdir` command must be executed either from another volume than that containing the symbolic link `~` to /Users/<User Name>, or from the root directory `(/)` of that volume, otherwise the path would be incorrect. Note that the same holds true for the first answer above, as well.


#### Second One

`~/Sites/1/2/3/4/5/6/7/8/9/hello/its/me/adele.jpg`  
`~/Sites/i/was/wondering/if/after/all/these/years/you would/like/to/meet.jpg`  

#### _Answer:_

`$ mkdir -p ~/Sites/1/2/3/4/5/6/7/8/9/hello/its/me`  
`$ cd ~/Sites/1/2/3/4/5/6/7/8/9/hello/its/me`  
`$ [cp | mv] path/to/adele.jpg .`  
`$ cd ~/Sites`  
`$ mkdir -p 'i/was/wondering/if/after/all/these/years/you would/like/to'`  
`$ cd 'i/was/wondering/if/after/all/these/years/you would/like/to'`  
`$ [cp | mv] path/to/meet.jpg .`

###### See _Caveat_ above.