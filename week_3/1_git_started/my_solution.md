## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Adds one or more files to the staging area. Nothing is committed or synced during this step; all that happens is that the file in question is added to the list of things that Git will look at in that repository.

#### branch
Creates a new branch in the current commit. Basically it's another reference point for changes made, and it doesn't affect changes made in other branches. This allows multiple people to work on the same thing together.

#### checkout
Switches into a specific branch or commit and lets you work on that area by creating a working copy. 

#### clone
Takes a repository and copies it into a new directory.

#### commit
Saves a current record of changes made to files in the repository. You can go back to previous commits to work on work in older states. With this command you can add a message that describes your changes by using -m.

#### fetch
If you want to see how another repository has changed, but you don't necessarily want to apply the changes to your own repository, you can use fetch to look at it without affecting your work.

#### log
Shows a list of records made when previous commits were executed.

#### merge
Reconciles two branches. You use this when work has been done on the same file from two different sources. Merge combines the work into a single file.

#### pull
This is like fetch, but it also applies and integrates changes made. If I pull from the repository containing this lesson, any changes made to the lesson by the author are automatically applied.

#### push
This sends commits out so they are visible to others. It's basically how you share your changes.

#### reset
Tells a branch to point to a different commit in a repository. Potentially dangerous if you point to an older commit, because the newer commit is abandoned unless the same or another branch is reset to point to it.

#### rm
Take a file out of the list of items that Git looks at when it deals with that repository.

#### status
Shows a list of staged and uncommitted changes. Lists branch name and if any files are untracked.

## Release 4: Git Workflow

- Push files to a remote repository

mkdir creates a new folder, cd "newfoldername" enters it
git init sets up git in the folder
git remote add [name] [url] (where name is the remote's name (usually origin) and url is the location of the repository on GitHub) connects the local folder to the remore repository.
git remote -v view the connection to make sure it works
git commit locks in changes made locally, use -m to add commit message
git push updates the changes to the remote.

- Fetch changes

git fetch retrieves changes
git merge combines changes with local work once you're ready

- Commit locally

git commit saves local changes to a new commit.

## Release 5: Errors you encountered
None

## Release 6: Reflection

I think I understand this concept pretty well. I'm still trying to wrap my head around what branches actually are as far as how the code is handled. I'll have to do more reading to pick up on that. One place where I struggled was forgetting to git init at the start of my work, and I can see myself forgetting to fetch/pull changes to the syllabus in the future. But this felt like a fairly easy exercise.

