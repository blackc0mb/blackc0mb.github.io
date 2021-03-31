---
title: Example with branches in Git & GitHub
layout: post
date: 2021-03-22 22:05
modified_date: 2021-03-28 13:15
author: TMorales
tag: GitHub Git
---
#### Short guide working with branches in Git & GitHub  
---
I consider myself a beginner working with **Git** and **GitHub**, so this steps is a good start (or practice) to work in a new feature or experiments in any **GitHub** repository.  

> 💡 Before you start, previously you should have clone the repository where you will be working on. For this example the repository name used is hello-world  

#### Steps  
1. Check whether a **branch** exists in the repository  

    ```bash  
    git branch -a  

    # Output (something like this):  
    * main  
    remotes/origin/HEAD -> origin/main  
    remotes/origin/main  
    remotes/origin/readme-edits  
    ```  

    For this example there is only the **main branch** and it is important to check if there is a previously **branch** created.  

2. Create the new **branch**  

    ```bash  
    git checkout -b hello-world_new_feature  

    # Output (something like this):  
    Switched to a new branch 'hello-world_new_feature'  
    ```  

    > 💡 In case that the **branch** name exists, the git command will show you a message error  

3. Make the changes in the new **branch**  
    
    Now you can modify the files, add, delete and so on in this new **branch**, for this example I only modified the content of the **README.md** file with the following lines:  

    ```markdown
    # hello-world  

    Hello Everyone!  
    This repo is just to practice.  
    ```

4. _Stage_ and _commit_ the new changes  

    - _Stage_ the changes and check the **branch** status:  

        ```bash  
        # Stage changes  
        git add README.md  

        # Check the status  
        git status  

        # Output (something like this):  
        On branch hello-world_new_feature  
        Changes to be committed:  
        (use "git reset HEAD <file>..." to unstage)  
            modified:   README.md  
        ```
    
    - _Commit_ the changes:  

        ```bash
        git commit -m "README.md file modified"  

        # Output (something like this):  
        [hello-world_new_feature e7b0423] README.md file modified  
        1 file changed, 1 insertion(+), 3 deletions(-)  
        ```  

5. _Merge_ the changes  

    Now if everything works fine, you have to switch to the **master** or **main branch**, to do this run the following command:  

    ```bash  
    git checkout main  

    # In this example, the 'master' branch is main  
    # Output (something like this):  
    Switched to branch 'main'  
    Your branch is up to date with 'origin/main'.  

    Once you are in the **master** or **main branch**, just run the **merge** command:  

    git merge hello-world_new_feature --no-ff  

    # Output (something like this):  
    Merge made by the 'recursive' strategy.  
    README.md | 4 +---  
    1 file changed, 1 insertion(+), 3 deletions(-)  
    ```  

    > 💡 The _--no-ff_ command part, retains the commit messages  

6. The last step is _push_ the changes to **GitHub**  

    ```bash
    git push  

    # Output (something like this):  
    Enumerating objects: 6, done.  
    Counting objects: 100% (6/6), done.  
    Delta compression using up to 4 threads  
    Compressing objects: 100% (3/3), done.  
    Writing objects: 100% (4/4), 421 bytes | 140.00 KiB/s, done.  
    Total 4 (delta 1), reused 0 (delta 0)  
    remote: Resolving deltas: 100% (1/1), done.  
    To https://github.com/<your username>/hello-world.git  
    2ec5ed4..8c3979e  main -> main  
    ```  

    Done❗  
    You should see the final changes in your **main** or **master branch**.

### Conclusion  

When you are working in a project (in a company, freelance or even in an open source project, and so on), it is very important to follow the best practices to maintain stable the original source code, so this steps described above is a little piece how you could work safe and keep the original source code without any risk for unintentional changes.  


Thanks for reading! **TM**  