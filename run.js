#include <iostream>
#include <fstream>
#include <string>
#include <stdexcept>
#include <vector>

void caesarEncrypt(std::ifstream& inFile, std::ofstream& outFile) {
    char ch;
    while (inFile.get(ch)) {
        ch = ch + 5;
        outFile.put(ch);
    }
}

void aesEncrypt(std::ifstream& inFile, std::ofstream& outFile) {
    char ch;
    while (inFile.get(ch)) {
        outFile.put(ch);
    }
}

void encryptFile(const std::string& filename) {
    try {
        std::ifstream inFile(filename, std::ios::binary);
        if (!inFile) {
            throw std::runtime_error("Failed to open input file");
        }

        std::ofstream outFile(filename + ".encrypted", std::ios::binary);
        if (!outFile) {
            throw std::runtime_error("Failed to create output file");
        }

        aesEncrypt(inFile, outFile);

        inFile.close();
        outFile.close();

        std::cout << "File encrypted successfully\n";
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }
}

int main() {
    std::string filename;
    std::cout << "Enter filename: ";
    std::getline(std::cin, filename);

    encryptFile(filename);

    return 0;
}
