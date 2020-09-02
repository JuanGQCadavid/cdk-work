#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CrosdCdkStack } from '../lib/crosd-cdk-stack';

const app = new cdk.App();
new CrosdCdkStack(app, 'CrosdCdkStack');
