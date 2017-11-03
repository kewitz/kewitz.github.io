date: 2017-07-18
title: Playing with Docker.


I've been playing around with docker lately. The main objective was to dockerize some stuff I use in my dev environment.

The first thing I got to do was clean up docker, it was a mess. But to clean all images we first need to clean all containers, since containers depend on images.

We can remove all containers with:
```bash
docker rm $(docker ps -q -a)
```

After that we're good to clean all images:
```bash
docker rmi $(docker images -a | awk '{print $3}')
```
You might get some errors here since an image can depend on another image and you can't actually remove a dependency. To make sure you clean everything up, repeat that command until you see no errors.

Now we're good to start creating our new containers. For `mongo` I'm going to create a simple image running the latest version docker can find.
```bash
docker create -p 27017:27017 --name mongo mongo
```
Notice that I published the default `mongod` port to my localhost using `-p 27017:27017`. I also named my container after the image, this makes it easier to run it latter.

Done, now you can start and stop mongo as you wish with:
```bash
docker [start|stop] mongo
```