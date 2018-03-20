#encoding:utf-8
"""
author:ola.chen@ixiaoshuidi.com
version:4.5
datetime:2017-05-31

"""

import time
from cuisine import *
from fabric.api import *
from fabric.contrib.project import rsync_project, upload_project
from fabric.contrib.files import  exists
today = time.strftime("%Y-%m-%d-%H%M", time.localtime())

env.name            = 'milkRiver-h5'
env.hosts           = ['xs1']
env.user            = 'root'
env.path            = '/srv/{}'.format(env.name)
env.nginx_conf      = '/usr/local/nginx/conf/vhost/{}'.format(env.name)
env.repositories    = 'git@repo.t-y.me:{}.git'.format(env.name)
env.db_name         = env.name
env.bin_path        = '/root/.virtualenvs/{}/bin/'.format(env.name)
env.key_filename    = '/var/lib/jenkins/.ssh/id_rsa.pub'

def pub(tag='dev'):
    if tag in ['dev']:
        with lcd('/data/www/milkRiver-h5'):
            local('git checkout -- .')
            local('pwd')
            local('git pull origin dev')
            local('git checkout dev')
    else:
        online_server()

def online_server(tag='master'):

    with mode_sudo():
        with cd(env.path):
            run('git checkout -- .')
            run('git pull origin {}'.format(tag))
            run('git checkout {}'.format(tag))

