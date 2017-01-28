# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'

current_dir    = File.dirname(File.expand_path(__FILE__))
configs        = YAML.load_file("#{current_dir}/variables.yml")

Vagrant.configure('2') do |config|
  config.vm.box = 'azure'
  config.vm.box_url = 'https://github.com/msopentech/vagrant-azure/raw/master/dummy.box' #Caja base vacía
  config.vm.network "private_network",ip: "192.168.50.4", virtualbox__intnet: "vboxnet0" #Ip privada
  config.vm.hostname = "localhost"
  config.vm.network "forwarded_port", guest: 80, host: 80



  config.vm.provider :azure do |azure, override|

    # use Azure Active Directory Application / Service Principal to connect to Azure
    # see: https://azure.microsoft.com/en-us/documentation/articles/resource-group-create-service-principal-portal/

    # each of the below values will default to use the env vars named as below if not specified explicitly
    # use local ssh key to connect to remote vagrant box
    config.ssh.private_key_path = '~/.ssh/id_rsa'
    azure.vm_image_urn = 'canonical:UbuntuServer:16.04-LTS:16.04.201701130' #Imagen base del sistema
    azure.vm_size = 'Basic_A0' #Tamaño (recursos) de la MV
    azure.location = 'westeurope'
    azure.vm_name = configs['vm_name']
    azure.vm_password = configs['vm_password']
    azure.tcp_endpoints = '80:80'

    azure.tenant_id = configs['AZURE_TENANT_ID']
    azure.client_id = configs['AZURE_CLIENT_ID']
    azure.client_secret = configs['AZURE_CLIENT_SECRET']
    azure.subscription_id = configs['AZURE_SUBSCRIPTION_ID']

  end

  # Provisionar con ansible
  config.vm.provision "ansible" do |ansible|
    ansible.sudo = true
    ansible.playbook = "playbooks.yml"
    ansible.verbose = "-vvvv"
    ansible.host_key_checking = false
  end

end
