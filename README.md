# Getting Started

Make sure to install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

Open a new terminal at this location and pull up the virtual machine:

```sh
vagrant up
```

Place your project here.

To run the project you need to ssh into the virtual machine:

```sh
vagrant ssh
docker run --rm -it -v $(pwd):/src -w /src node npm install
docker run --rm -it -P -v $(pwd):/src -w /src node npm start
```
