import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  {create: createFeedbackSpy},
  {sendMail: sendMailSpy },
)

describe('submit feedback', () => {
  it('should be able to submit a feedback', async() => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Example',
      screenshot: "data:image/png;base64.test.jpg"
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should be not able to submit a feedback without a type', async() => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Example',
      screenshot: "data:image/png;base64.test.jpg"
    })).rejects.toThrow();
  });

  it('should be not able to submit a feedback without a comment', async() => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: "data:image/png;base64.test.jpg"
    })).rejects.toThrow();
  });

  it('should be not able to submit a feedback without a invalid screenshot', async() => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Test',
      screenshot: "test.jpg"
    })).rejects.toThrow();
  });
})