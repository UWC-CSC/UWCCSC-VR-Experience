# UWC Changshu China VR Experience

[UWC Changshu China](http://www.uwcchina.org/en), a boarding school, currently 
has troubles with presenting itself to faraway students that are interested.
Due to financial stress it is usually impossible to come on campus to explore 
the location.

This application tries to rectify that by presenting a VR experience with 
which users can experience a fraction of the events that occur on campus.

## Getting Started

### Linux / macOS

#### Prerequisites

The only real prerequisite is `npm`.

With `npm`, you need to install a typescript compiler globally to your machine:
```
npm install -g typescript
```

#### Installing

Clone the repository:
```
git clone git@github.com:UWC-CSC/UWCCSC-VR-Experience.git
```

Go into the directory:
```
cd UWCCSC-VR-Experience
```

Now, just run `npm install` to pull all the dependencies down.

#### Compiling

The `src` folder contains a `build.sh` script. You can build the code by 
running
```
cd src
chmod +x build.sh
./build.sh
```

This creates the compiled, packed and ready-to-run code in the `dist/`
directory.

## Built With

* [NPM](https://www.npmjs.com/) - The JavaScript package manager
* [Typescript](https://www.typescriptlang.org/) - A much better 
replacement to Javascript
* [Webpack](https://webpack.js.org/) - Asset bundler

## License
This project is licensed under the LGPLv3 license - see the 
[LICENSE.txt](LICENSE.txt) file for details.

## Acknowledgments

* [PurpleBooth](https://gist.github.com/PurpleBooth) for her 
[beautiful README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
