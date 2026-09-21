import { Controller } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }

  @MessagePattern('get_notification')
  getNotification(
    @Payload() data: any,
  ) {
    return {
      message: 'Hello from Notification Service',
      receivedData: data,
    };
  }

  @EventPattern('student_enrolled')
  handleStudentEnrolled(
    @Payload() data: any,
  ) {
    console.log(
      'Student enrolled event received:',
      data,
    );
  }
}