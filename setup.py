# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import os

version = '0.0.1'

setup(
    name='mandrill_integration',
    version=version,
    description='Set communication status from Mandrill via webhooks',
    author='Dataent Technologies Pvt. Ltd.',
    author_email='team@dataent.io',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=("dataent",),
)
