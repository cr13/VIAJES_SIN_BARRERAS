from fabric.api import run
from fabric.api import task


def install():
    run('sudo npm install -g forever')

def run_app():
    run('cd VIAJES_SIN_BARRERAS && export PORT=80 && sudo -E forever start app.js')

def run_test():
    run('cd VIAJES_SIN_BARRERAS && npm test')
    
def stop():
	run('forever stopall')

def restart():
	run('forever restartall')

def pull():
    run('cd VIAJES_SIN_BARRERAS && sudo git pull')
    restart()
