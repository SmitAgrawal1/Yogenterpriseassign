const fs = require('fs').promises;
const path = require('path');

const directoryPath = path.join(__dirname, 'task_automation');

// Function to create directory if it doesn't exist
const createDirectory = async () => {
    try {
        await fs.access(directoryPath);
    } catch (error) {
        await fs.mkdir(directoryPath);
    }
};

// Function to create and write content to files
const createFiles = async () => {
    const fileContents = ['Content for file1.txt', 'Content for file2.txt', 'Content for file3.txt'];

    for (let i = 0; i < 3; i++) {
        await fs.writeFile(path.join(directoryPath, `file${i + 1}.txt`), fileContents[i]);
    }
};

// Function to concatenate file contents
const concatenateFiles = async () => {
    let concatenatedContent = '';

    for (let i = 0; i < 3; i++) {
        const content = await fs.readFile(path.join(directoryPath, `file${i + 1}.txt`), 'utf8');
        concatenatedContent += content + '\n';
    }

    await fs.writeFile(path.join(directoryPath, 'concatenated.txt'), concatenatedContent);
    console.log(concatenatedContent);
};

// Function to delete files
const deleteFiles = async () => {
    for (let i = 0; i < 3; i++) {
        await fs.unlink(path.join(directoryPath, `file${i + 1}.txt`));
    }
};

// Main function to orchestrate the tasks
const main = async () => {
    await createDirectory();
    await createFiles();
    await concatenateFiles();
    await deleteFiles();
};

main().catch(console.error);
