# [해당 스크립트를 그대로 사용했으며 Dockerfile에서 수행되기에 sudo만 제거](https://learn.microsoft.com/ko-kr/dotnet/core/install/linux-ubuntu#register-the-microsoft-package-repository)

# Get Ubuntu version
declare repo_version=$(if command -v lsb_release &> /dev/null; then lsb_release -r -s; else grep -oP '(?<=^VERSION_ID=).+' /etc/os-release | tr -d '"'; fi)

# Download Microsoft signing key and repository
wget https://packages.microsoft.com/config/ubuntu/$repo_version/packages-microsoft-prod.deb -O packages-microsoft-prod.deb

# Install Microsoft signing key and repository
dpkg -i packages-microsoft-prod.deb

# Clean up
rm packages-microsoft-prod.deb

# Update packages
apt update
